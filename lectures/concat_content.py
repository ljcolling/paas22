import glob

files = glob.glob("./w**/handout/_content.qmd")
files.sort()


all_content = []
for i, file in enumerate(files):
    with open(file, 'rt') as f:
        content = f.readlines()
    heading = [f"# Lecture {i + 1}\n\n"]
    all_content.append(heading)
    all_content.append(content)

def flatten(x):
    return [item for sublist in x for item in sublist]

all_content = flatten(all_content)

with open("./week11/handout/_content.qmd", 'wt') as f:
    f.writelines(all_content)
