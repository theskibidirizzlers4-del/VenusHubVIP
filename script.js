const form = document.getElementById('uploadForm');
const preview = document.getElementById('preview');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = document.getElementById('fileInput').files[0];
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch('/upload', {
    method: 'POST',
    body: formData
  });

  const data = await res.json();
  const fileUrl = data.url;

  let element;
  if (file.type.startsWith('image/')) {
    element = document.createElement('img');
    element.src = fileUrl;
    element.width = 300;
  } else if (file.type.startsWith('video/')) {
    element = document.createElement('video');
    element.src = fileUrl;
    element.controls = true;
    element.width = 300;
  }

  preview.appendChild(element);
});
