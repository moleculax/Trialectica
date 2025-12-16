from PyPDF2 import PdfReader, PdfWriter

input_path = "/data/Sintergia_organizaciona.pdf"
output_path = "/data/Sintergia_organizaciona_sin_primera_pagina.pdf"

reader = PdfReader(input_path)
writer = PdfWriter()
// Elimina pa primera pagina del pdf 0 primera pagina 1 segunda pagina
for page in reader.pages[1:]:
    writer.add_page(page)

with open(output_path, "wb") as f:
    writer.write(f)

output_path
