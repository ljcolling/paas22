from glob import glob

files = glob("*/handout/_content.qmd")

file = files[0]
toc = []

for file in files:
    with open(file, 'rt') as f:
        content = f.readlines()

# first remove all the code chunks

    in_chunk = False
    stripped_content = []
    for line in content:
        if '```' in line:
            in_chunk = not in_chunk
            pass
        if in_chunk == False:
            stripped_content.append(line)

    headings = []
    for line in stripped_content:
        if '#' in line[0]:
            line = line.strip('\n')
            headings.append(f"{line} | {file}\n")


    toc.append(headings)

toc = [item for sublist in toc for item in sublist]

with open('toc.md', 'wt') as f:
    f.writelines(toc)
