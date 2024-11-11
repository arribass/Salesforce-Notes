import re
import json

def parse_markdown_to_json(md_file):
    with open(md_file, 'r') as file:
        md_content = file.read()

    # Regular expression to capture questions, options, and reasoning
    question_pattern = re.compile(
        r'## Question\n\s*(.*?)\s*((?:[\s\S]*?)(?=\n## Question|\Z))',  # Captura pregunta y respuestas
        re.DOTALL
    )

    questions = []
    matches = question_pattern.findall(md_content)

    for match in matches:
        question_text = match[0].strip()  # Captura el texto de la pregunta
        options_text = match[1].strip()  # Captura las opciones

        print(f"Debugging question: {question_text}")  # Para depuración

        # Extraer razonamiento (si existe) y eliminarlo de las opciones
        reasoning_match = re.search(r'Reasoning:\s*(.*)', options_text)
        reasoning = reasoning_match.group(1).strip() if reasoning_match else None
        options_text = re.sub(r'Reasoning:.*', '', options_text).strip()

        # Dividir las opciones por líneas
        option_lines = options_text.split("\n")
        options = []
        correct_option = None

        for i, line in enumerate(option_lines):
            # Limpiar la línea: eliminar espacios y "- "
            cleaned_line = line.replace(" Most Voted", "").replace("- ", "").strip()
            
            # Verificar si la respuesta está en negrita (respuesta correcta)
            if "**" in cleaned_line:
                cleaned_line = cleaned_line.replace("**", "")  # Eliminar negrita
                correct_option = i  # Guardar el índice de la opción correcta
            
            if cleaned_line:  # Solo agregar opciones no vacías
                options.append(cleaned_line)

        # Si no se encuentra una opción correcta, mostramos una advertencia
        if correct_option is None and options:
            print(f"Warning: No correct option found for question: {question_text}")
            correct_option = 0  # Establecer una opción por defecto

        # Preparar los datos de la pregunta
        question_data = {
            "question": question_text,
            "answers": options,
            "correct_option": correct_option,
            "reasoning": reasoning
        }
        questions.append(question_data)

    # Devolver el resultado como una cadena JSON formateada
    return json.dumps(questions, indent=4)

# Convertir el archivo markdown a JSON
md_file = 'questions.md'  # Ruta al archivo markdown
json_output = parse_markdown_to_json(md_file)

# Escribir el resultado en un archivo JSON
with open('questions_with_answers.json', 'w') as json_file:
    json_file.write(json_output)

print("Conversion complete! The JSON file has been saved.")
