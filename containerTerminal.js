// input lines
const N: number = parseInt(readline());
const lines: string[] = [];
for (let i = 0; i < N; i++) {
   const line = readline();
   lines.push(line);
}

// scan char
for (let i = 0; i < N; i++) {
    const column: string[] = [];

    for (let j = 0; j < lines[i].length; j++) {
        let placed = false;

        for (let z = 0; z < column.length; z++) {
            const lastchar = column[z].slice(-1);
            if (lastchar >= lines[i][j]) {
                column[z] += lines[i][j]
                placed = true;
                break;
            }
        }

        if (!placed) {
            column.push(lines[i][j])
        }
    }

    console.log(column.length)
}
