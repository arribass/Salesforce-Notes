import re
import json
import datetime

# Función para leer el contenido del archivo Markdown
def read_markdown_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

# Expresión regular para capturar la pregunta y sus respuestas
question_pattern = re.compile(r'## Question\s*(.*?)\s*(?=-|Reasoning:|\Z)', re.DOTALL)

# Expresión regular para capturar las respuestas
answer_pattern = re.compile(r'-\s*(.*?)\s*', re.DOTALL)

# Función para procesar el contenido y generar el JSON
def process_markdown_to_json(markdown_text):
    # Encontrar preguntas
    questions = question_pattern.findall(markdown_text)

    # Encontrar todas las respuestas
    answers = answer_pattern.findall(markdown_text)

    # Crear el JSON con las preguntas y respuestas
    questions_data = []

    # Asegurarse de que el número de respuestas coincida con el número de preguntas
    question_idx = 0
    for i in range(len(questions)):
        question_text = questions[i].strip().replace("\n", " ")  # Limpiar la pregunta de saltos de línea
        
        # Crear la lista de respuestas asociadas a la pregunta
        answers_list = []
        while question_idx < len(answers) and answers[question_idx].strip() != "":
            answers_list.append(answers[question_idx].strip())
            question_idx += 1

        # Crear un diccionario para cada pregunta con sus respuestas
        questions_data.append({
            "question": question_text,
            "answers": answers_list
        })

    # Convertir a formato JSON
    return json.dumps(questions_data, indent=4)

# Función para generar un nombre de archivo con timestamp
def generate_filename():
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")  # Fecha y hora actual
    filename = f"questions_{timestamp}.json"  # Formato de archivo con timestamp
    return filename

# Leer el archivo Markdown
file_path = 'questions.md'  # Ruta al archivo Markdown
markdown_text = read_markdown_file(file_path)

# Procesar y generar el JSON
json_output = process_markdown_to_json(markdown_text)

# Generar el nombre de archivo con timestamp
output_filename = generate_filename()

# Escribir el JSON en un archivo con el nombre generado
with open(output_filename, 'w', encoding='utf-8') as json_file:
    json_file.write(json_output)

# Mostrar el resultado
print(f"JSON file saved as: {output_filename}")
