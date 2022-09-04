from glob import glob
import subprocess
import math
files = glob("lectures/w**/handout/_content.qmd")
print("Reading time\n")
print("-----------------------\n")
for file in files:
    proc = subprocess.Popen(["pandoc", "--lua-filter", "wordcount.lua", file, "--from=markdown"], stdout=subprocess.PIPE)
    out = proc.communicate()[0]
    minutes = math.ceil(int(out.decode().strip("\n")) / 180)
    print(f"{file}: {minutes} minutes\n")
