const techStack = {
  cpp: "https://static-00.iconduck.com/assets.00/c-icon-1822x2048-y6utrv43.png",
  vue: "https://static-00.iconduck.com/assets.00/vue-icon-512x442-j09z7tua.png",
  css: "https://static-00.iconduck.com/assets.00/css-3-icon-440x512-ro22zra3.png",
  java: "https://static-00.iconduck.com/assets.00/java-icon-378x512-w60vlu77.png",
  dart: "https://static-00.iconduck.com/assets.00/dart-icon-1021x1024-0q8oyg7c.png",
  html: "https://static-00.iconduck.com/assets.00/html-5-icon-224x256-1b5ud2sy.png",
  dotnet: "https://static-00.iconduck.com/assets.00/dotnet-icon-256x256-ozvjws7o.png",
  python: "https://static-00.iconduck.com/assets.00/python-icon-2048x2048-lhgnpljc.png",
  springboot: "https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png",
  flutter: "https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png",
  typescript: "https://static-00.iconduck.com/assets.00/typescript-icon-256x256-nuvyqkqx.png",
  javascript: "https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png",
  tailwind: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
  angular: "https://static-00.iconduck.com/assets.00/file-type-ng-smart-component-ts-icon-250x256-ilof0grb.png",
};

const projects = [ 
  { iframeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", techStack: ["cpp", "vue", "css"] },
  { iframeUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", techStack: ["html", "javascript", "tailwind"] },
  { iframeUrl: "https://www.youtube.com/embed/L_jWHffIx5E", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.", techStack: ["python", "dotnet", "angular"] },
];

function createProjectItem(iframeUrl, description, techStackKeys) {
  const techIcons = techStackKeys.map(key => `<img src="${techStack[key]}" alt="${key}-logo" class="size-5"/>`).join('');
  
  return `
    <div class="w-[280px] p-4">
      <div class="rounded-2xl bg-white h-[320px] text-black flex flex-col items-center justify-start">
        <div class="relative w-full h-0 pb-[56.25%] rounded-t-2xl overflow-hidden">
          <iframe src="${iframeUrl}" frameborder="0" allowfullscreen class="absolute top-0 left-0 w-full h-full rounded-t-2xl m-0 p-0"></iframe>
        </div>
        <div class="p-5 flex flex-col items-center justify-center gap-4 w-full" style="min-height: 100px;">
          <p class="text-center">${description}</p>
          <div class="flex flex-row gap-3">
            ${techIcons}
          </div>
          <div>
            <a>
              <img src="/assets/images/svg/github-black.svg" alt="github-icon" class="size-5"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}


async function loadProjectItems(containerId) {
  const container = document.getElementById(containerId);
  
  for (const project of projects) {
    const projectHTML = createProjectItem(project.iframeUrl, project.description, project.techStack);
    const blob = new Blob([projectHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const response = await fetch(url);
    const text = await response.text();
    
    container.innerHTML += text;
    
    URL.revokeObjectURL(url);
  }
}

loadProjectItems('projects__container');