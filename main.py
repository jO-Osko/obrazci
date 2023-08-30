from dataclasses import dataclass

from PyPDF2 import PdfWriter, PdfReader
import io
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
import json

posta = "1360 Vrhnika"
datum_izpolnjevanja = "10.8.2023"
vrsta_aktivnosti = "Odpravljanje posledic poplav"

# TODO: Čč does not work


def canonize(s: str) -> str:
    s = s.lower()
    s = "".join(s.split())
    s = s.replace("č", "c").replace("š", "s").replace("ž", "z")
    # clean non word chars
    s = "".join([c for c in s if c.isalpha()])
    return s


@dataclass
class Person:
    ime: str
    priimek: str
    naslov: str
    emso: str
    nick: str
    post: str | None = None

    def create_texts(self):
        return [
            Text(f"{self.ime} {self.priimek}", 215, 615),
            Text(f"{self.naslov.title()}, {self.post or posta}", 215, 600),
            Text(f"{self.emso}", 420, 615),
        ]

    @classmethod
    def from_dict(cls, data: dict):
        return cls(
            data["name"],
            data["surname"],
            data["address"],
            data["emso"],
            data.get("nick", ""),
            data.get("post", None),
        )

    def match(self, name: str) -> bool:
        if canonize(name) == canonize(self.ime):
            return True
        if canonize(name) == canonize(self.priimek):
            return True
        if canonize(name) in canonize(f"{self.ime} {self.priimek}"):
            return True
        if canonize(name) in canonize(self.nick):
            return True
        return False


@dataclass
class Trajanje:
    dan: str
    zacetek: int
    konec: int

    def create_texts(self):
        meta = small_text
        return [
            Text(self.dan, 215, 263, meta),
            Text(self.dan, 80, 263, meta),
            Text(f"{self.zacetek}.00", 150, 263, meta),
            Text(f"{self.konec}.00", 280, 263, meta),
            Text(f"{self.konec - self.zacetek}", 350, 263, meta),
            Text(f"0/{self.konec - self.zacetek}", 240, 205, meta),
            Text(vrsta_aktivnosti, 170, 193, meta),
        ]

    @classmethod
    def from_json(cls, data: dict):
        return cls(
            data["day"],
            data["start_time"],
            data["end_time"],
        )


@dataclass
class Text:
    text: str
    x: int
    y: int
    metadata: tuple | None = None


GZ_VRHNIKA = [
    Text("GASILSKA ZVEZA VRHNIKA", 215, 705),
    Text("TRŽAŠKA 11, 1360 VRHNIKA", 215, 691),
]

GZS = [
    Text("GASILSKA ZVEZA SLOVENIJE", 215, 705),
    Text("TRŽAŠKA CESTA 221, 1000 Ljubljana", 215, 691),
]

small_text = "Times-Roman", 8

FONTS = "Times-Roman", 12

datum = Text(datum_izpolnjevanja, 110, 215, small_text)

data = json.load(open("data.json", "r", encoding="utf-8"))

trajanje = Trajanje.from_json(data["data"]["duration"])


def make_document(person: Person, assoc: list[Text] = GZ_VRHNIKA):
    packet = io.BytesIO()
    can = canvas.Canvas(packet, pagesize=letter)

    TEXTS = assoc + person.create_texts() + trajanje.create_texts() + [datum]

    for text in TEXTS:
        can.setFont(*FONTS)
        if text.metadata:
            can.setFont(*text.metadata)
        can.drawString(text.x, text.y, text.text)

    can.save()

    packet.seek(0)

    new_pdf = PdfReader(packet)

    existing_pdf = PdfReader(open("R-1.pdf", "rb"))
    output = PdfWriter()

    page = existing_pdf.pages[0]
    page.merge_page(new_pdf.pages[0])
    output.add_page(page)

    output_stream = open(f"obrazci/{person.ime}_{person.priimek}.pdf", "wb")
    output.write(output_stream)
    output_stream.close()


people = [Person.from_dict(person) for person in data["folk"]]


def matches(name: str):
    rtr = None
    for person in people:
        if person.match(name):
            if rtr is None:
                rtr = person
            else:
                print("Multiple matches for", name)
                return None
    return rtr


for include in data["data"]["include"]:
    if match := matches(include):
        make_document(match)
    else:
        print("No match for", include)
