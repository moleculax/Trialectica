from PyPDF2 import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from io import BytesIO

input_path = "/mnt/data/archivo_original.pdf"
output_path = "/mnt/data/archivo_con_pie_y_link.pdf"

url = "https://trialectica.vercel.app/"

reader = PdfReader(input_path)
writer = PdfWriter()

total_pages = len(reader.pages)

for i, page in enumerate(reader.pages, start=1):
    packet = BytesIO()
    c = canvas.Canvas(packet, pagesize=A4)

    # Fuente
    c.setFont("Helvetica", 9)

    # Texto del pie
    texto_pagina = f"Página {i} de {total_pages}"
    texto_link = url

    # Posiciones
    y = 20
    x_centro = A4[0] / 2
    x_link = A4[0] - 200

    # Número de página
    c.drawCentredString(x_centro, y, texto_pagina)

    # Texto del link
    c.drawString(x_link, y, texto_link)

    # Área clickeable del link
    c.linkURL(
        url,
        (x_link, y - 2, x_link + 180, y + 10),
        relative=0
    )

    c.save()
    packet.seek(0)

    footer_pdf = PdfReader(packet)
    page.merge_page(footer_pdf.pages[0])
    writer.add_page(page)

with open(output_path, "wb") as f:
    writer.write(f)

output_path
