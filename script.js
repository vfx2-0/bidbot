function breakdownScript() {
  const input = document.getElementById("scriptInput").value;

  // Split on lines that start with scene headings such as
  // INT., EXT., INT/EXT or EXT./INT. The match is case-insensitive
  // and ignores optional spaces and periods around the slash.
  const scenes = input
    .split(/\n(?=[ \t]*(?:INT|EXT)\.?[ \t]*(?:\/[ \t]*(?:INT|EXT)\.?)?)/gi)
    .filter(Boolean);

  const output = document.getElementById("output");
  output.innerHTML = '';

  for (let scene of scenes) {
    const div = document.createElement('div');
    const [header, ...body] = scene.split('\n');
    div.innerHTML = `<h3>${header}</h3><p>${body.join('<br>')}</p>`;
    output.appendChild(div);
  }
}
