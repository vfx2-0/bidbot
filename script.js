function breakdownScript() {
  const input = document.getElementById("scriptInput").value;

  // This splits on any line starting with INT. or EXT.
  const scenes = input.split(/\n(?=INT\.|EXT\.)/g).filter(Boolean);

  const output = document.getElementById("output");
  output.innerHTML = '';

  for (let scene of scenes) {
    const div = document.createElement('div');
    const [header, ...body] = scene.split('\n');
    div.innerHTML = `<h3>${header}</h3><p>${body.join('<br>')}</p>`;
    output.appendChild(div);
  }
}
