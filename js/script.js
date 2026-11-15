const menuButtons = document.querySelectorAll('.menu-button[data-open]');
const panels = document.querySelectorAll('.legacy-panel');
const portButtons = document.querySelectorAll('.port-entry');
const portViews = document.querySelectorAll('.port-view');
const titleScreen = document.querySelector('.title-screen');
const legacyMenu = document.querySelector('.legacy-menu');
const backHomeButtons = document.querySelectorAll('.back-home');
const langButtons = document.querySelectorAll('.lang-btn');

// --- Multilanguage Dictionary ---
const translations = {
  en: {
    metaDesc: "OptiCraft Heritage Developer Community — unofficial OptiCraft Heritage ports.",
    "btn-ports": "PORT LIST",
    "btn-pak-tool": "ASSETS.PAK TOOL",
    "btn-ochpack-tool": "OCHPACK CREATOR (PS2)",
    "btn-ochpack-3ds-tool": "OCHPACK CREATOR (3DS)",
    "btn-skin-tool": "3DS SKIN CONVERTER",
    "btn-about": "ABOUT US",
    "btn-back": "BACK",
    "controls": "<span>▲ ▼</span> SELECT &nbsp; <span>ENTER</span> OPEN &nbsp; <span>ESC</span> BACK",
    "footer-disclaimer": "Developed by OptiCraft Heritage Developer Community.<br>Not affiliated with Optiprojects.",
    "btn-view-project": "VIEW PROJECT",
    "btn-official-repo": "OFFICIAL REPO",
    "btn-download": "DOWNLOAD",
    "btn-releases": "RELEASES",
    "btn-muzifer-build": "MUZIFER01 BUILD",
    "btn-brunox-build": "BRUNOX X BUILD",
    "btn-nightly-build": "NIGHTLY BUILD (CI)",
    "btn-spoinkmov-fork": "SPOINKMOV LCE FORK",
    "btn-nightly-x64-gcc": "NIGHTLY X64 GCC (CI)",
    "btn-nightly-v3": "NIGHTLY X86-64 V3 (CI)",
    "btn-nightly-zen4": "NIGHTLY ZEN 4 (CI)",
    "btn-nightly-zen3": "NIGHTLY ZEN 3 (CI)",
    "btn-nightly-x64-msvc": "NIGHTLY X64 MSVC (CI)",
    "btn-nightly-arm64": "NIGHTLY ARM64 (CI)",
    "btn-nightly-x86": "NIGHTLY X86 32-BIT (CI)",
    "btn-nightly-x86-legacy": "NIGHTLY X86 LEGACY (CI)",
    "btn-nightly-armv7": "NIGHTLY ARMV7 (CI)",
    "btn-nightly-apple-silicon": "NIGHTLY APPLE SILICON (CI)",
    "btn-nightly-intel": "NIGHTLY INTEL X64 (CI)",
    "port-dsi-meta": "Nintendo DSi · Homebrew",
    "port-dsi-desc": "Unofficial OptiCraft Heritage port for Nintendo DSi hardware.",
    "port-3ds-meta": "Nintendo 3DS · Homebrew",
    "port-3ds-desc": "Unofficial OptiCraft Heritage port targeting Nintendo 3DS.",
    "port-nds-meta": "Nintendo DS · Homebrew",
    "port-nds-desc": "Unofficial OptiCraft Heritage port for Nintendo DS, available as a precompiled build.",
    "btn-nds-download": "DOWNLOAD (PRE-RELEASE 3.1)",
    "port-wii-meta": "Nintendo Wii · Homebrew",
    "port-wii-desc": "Community OptiCraft Heritage port targeting the Nintendo Wii, built with devkitPPC.",
    "port-wii-lce-meta": "Nintendo Wii · Reborn Heritage",
    "port-wii-lce-desc": "Fork of OptiCraft Heritage Edition targeting the Nintendo Wii that aims to replicate Legacy Console Edition (LCE) with new features, built with devkitPPC by spoinkmov.",
    "port-ps2-meta": "PlayStation 2 · Enhanced build",
    "port-ps2-desc": "An improved OptiCraft Heritage build for the original PlayStation 2.",
    "btn-ps2-build95b": "DOWNLOAD (BUILD 95b)",
    "btn-ps2-build95c": "DOWNLOAD (BUILD 95c)",
    "btn-ps2-build95d": "DOWNLOAD (BUILD 95d)",
    "btn-ps2-build97a": "DOWNLOAD (BUILD 97A)",
    "port-psp-meta": "PlayStation Portable · Homebrew",
    "port-psp-desc": "Unofficial OptiCraft Heritage port for PlayStation Portable (PSP).",
    "btn-psp-download": "DOWNLOAD (PRECOMPILED)",
    "port-xbox-meta": "Xbox · Homebrew / xemu",
    "port-xbox-desc": "Community OptiCraft Heritage build targeting the original Xbox, with support for xemu.",
    "port-android-meta": "Android · ARM64",
    "port-android-desc": "ARM64 Android build of OptiCraft Heritage, currently targeting Android 7 and newer.",
    "port-switch-meta": "Nintendo Switch · Homebrew",
    "port-switch-desc": "Native Nintendo Switch Homebrew target built with devkitA64 and libnx.",
    "port-ps4-meta": "PlayStation 4 · Homebrew / shadPS4",
    "port-ps4-desc": "Experimental PS4 Homebrew port using the OpenOrbis toolchain, also targeting shadPS4.",
    "port-ps3-meta": "PlayStation 3 · Homebrew",
    "port-ps3-desc": "Community OptiCraft Heritage port with a native PlayStation 3 target.",
    "port-vita-meta": "PlayStation Vita · Homebrew",
    "port-vita-desc": "Community OptiCraft Heritage port targeting PlayStation Vita hardware.",
    "port-linux-meta": "Linux · Official repo",
    "port-linux-desc": "Linux builds of OptiCraft Heritage are distributed through the unified official repository.",
    "port-windows-meta": "Windows · Official repo",
    "port-windows-desc": "Windows support for OptiCraft Heritage is available through the unified official repository.",
    "port-macos-meta": "macOS · Apple Silicon / Intel",
    "port-macos-desc": "Native macOS builds of OptiCraft Heritage for Apple Silicon (ARM64) and Intel (x64).",
    aboutCopy: `
      <p>This platform was created as a central hub to compile and showcase all <strong>unofficial OptiCraft Heritage Edition ports</strong> across various consoles and devices, making them easily accessible to the community beyond the restrictions of platforms like YouTube.</p>
      <p class="about-warning">⚠️ <strong>Notice:</strong> Most projects are currently in early development (WIP), so please expect experimental builds and possible bugs.</p>
      <p>Have a port or want to contribute? Join our official <a class="discord-link" href="https://discord.gg/5ndWfJzb7e" target="_blank" rel="noreferrer">Discord server</a> to submit your project!</p>
    `,
    "modal-title": "KEEP THE PORTS ALIVE",
    "modal-lead": "A friendly reminder from the OptiCraft Heritage community.",
    "modal-msg-links": "If you enjoy a port, remind its developer to keep the download links updated to the latest version, so everyone can find the newest builds.",
    "modal-msg-source": "We also recommend always asking developers for the source code of their projects. Sharing code keeps ports alive, portable and easier to maintain.",
    "modal-subtext": "Good links and shared source code keep this site useful for everyone. Thank you for supporting the developers!",
    "modal-btn-never": "DON'T SHOW AGAIN",
    "modal-btn-ok": "GOT IT"
  },
  es: {
    metaDesc: "OptiCraft Heritage Developer Community — ports no oficiales de OptiCraft Heritage.",
    "btn-ports": "LISTA DE PORTS",
    "btn-pak-tool": "HERRAMIENTA ASSETS.PAK",
    "btn-ochpack-tool": "CREADOR OCHPACK (PS2)",
    "btn-ochpack-3ds-tool": "CREADOR OCHPACK (3DS)",
    "btn-skin-tool": "CONVERTIDOR SKINS (3DS)",
    "btn-about": "SOBRE NOSOTROS",
    "btn-back": "VOLVER",
    "controls": "<span>▲ ▼</span> SELECCIONAR &nbsp; <span>ENTER</span> ABRIR &nbsp; <span>ESC</span> VOLVER",
    "footer-disclaimer": "Desarrollado por OptiCraft Heritage Developer Community.<br>No afiliado a Optiprojects.",
    "btn-view-project": "VER PROYECTO",
    "btn-official-repo": "REPO OFICIAL",
    "btn-download": "DESCARGAR",
    "btn-releases": "LANZAMIENTOS",
    "btn-muzifer-build": "VERSIÓN MUZIFER01",
    "btn-brunox-build": "VERSIÓN BRUNOX X",
    "btn-nightly-build": "BUILD NOCTURNA (CI)",
    "btn-spoinkmov-fork": "FORK LCE DE SPOINKMOV",
    "btn-nightly-x64-gcc": "NOCTURNA X64 GCC (CI)",
    "btn-nightly-v3": "NOCTURNA X86-64 V3 (CI)",
    "btn-nightly-zen4": "NOCTURNA ZEN 4 (CI)",
    "btn-nightly-zen3": "NOCTURNA ZEN 3 (CI)",
    "btn-nightly-x64-msvc": "NOCTURNA X64 MSVC (CI)",
    "btn-nightly-arm64": "NOCTURNA ARM64 (CI)",
    "btn-nightly-x86": "NOCTURNA X86 32-BIT (CI)",
    "btn-nightly-x86-legacy": "NOCTURNA X86 LEGACY (CI)",
    "btn-nightly-armv7": "NOCTURNA ARMV7 (CI)",
    "btn-nightly-apple-silicon": "NOCTURNA APPLE SILICON (CI)",
    "btn-nightly-intel": "NOCTURNA INTEL X64 (CI)",
    "port-dsi-meta": "Nintendo DSi · Homebrew",
    "port-dsi-desc": "Port no oficial de OptiCraft Heritage para el hardware de Nintendo DSi.",
    "port-3ds-meta": "Nintendo 3DS · Homebrew",
    "port-3ds-desc": "Port no oficial de OptiCraft Heritage para Nintendo 3DS.",
    "port-nds-meta": "Nintendo DS · Homebrew",
    "port-nds-desc": "Port no oficial de OptiCraft Heritage para Nintendo DS, disponible como build precompilada.",
    "btn-nds-download": "DESCARGAR (PRE-RELEASE 3.1)",
    "port-wii-meta": "Nintendo Wii · Homebrew",
    "port-wii-desc": "Port comunitario de OptiCraft Heritage para la Nintendo Wii, compilado con devkitPPC.",
    "port-wii-lce-meta": "Nintendo Wii · Reborn Heritage",
    "port-wii-lce-desc": "Fork de OptiCraft Heritage Edition para Nintendo Wii con el objetivo de replicar la Legacy Console Edition (LCE) con nuevas funciones, compilado con devkitPPC por spoinkmov.",
    "port-ps2-meta": "PlayStation 2 · Versión mejorada",
    "port-ps2-desc": "Una versión mejorada de OptiCraft Heritage para la PlayStation 2 original.",
    "btn-ps2-build95b": "DESCARGAR (BUILD 95b)",
    "btn-ps2-build95c": "DESCARGAR (BUILD 95c)",
    "btn-ps2-build95d": "DESCARGAR (BUILD 95d)",
    "btn-ps2-build97a": "DESCARGAR (BUILD 97A)",
    "port-psp-meta": "PlayStation Portable · Homebrew",
    "port-psp-desc": "Port no oficial de OptiCraft Heritage para PlayStation Portable (PSP).",
    "btn-psp-download": "DESCARGAR (PRECOMPILADO)",
    "port-xbox-meta": "Xbox · Homebrew / xemu",
    "port-xbox-desc": "Versión comunitaria de OptiCraft Heritage para la Xbox clásica, con soporte para xemu.",
    "port-android-meta": "Android · ARM64",
    "port-android-desc": "Compilación ARM64 de OptiCraft Heritage para Android 7 o superior.",
    "port-switch-meta": "Nintendo Switch · Homebrew",
    "port-switch-desc": "Port nativo Homebrew para Nintendo Switch creado con devkitA64 y libnx.",
    "port-ps4-meta": "PlayStation 4 · Homebrew / shadPS4",
    "port-ps4-desc": "Port Homebrew experimental para PS4 mediante la toolchain OpenOrbis, también para shadPS4.",
    "port-ps3-meta": "PlayStation 3 · Homebrew",
    "port-ps3-desc": "Port comunitario de OptiCraft Heritage con soporte nativo para PlayStation 3.",
    "port-vita-meta": "PlayStation Vita · Homebrew",
    "port-vita-desc": "Port comunitario de OptiCraft Heritage para el hardware de PlayStation Vita.",
    "port-linux-meta": "Linux · Repo oficial",
    "port-linux-desc": "Las builds de OptiCraft Heritage para Linux se distribuyen a través del repositorio oficial unificado.",
    "port-windows-meta": "Windows · Repo oficial",
    "port-windows-desc": "El soporte de OptiCraft Heritage para Windows está disponible a través del repositorio oficial unificado.",
    "port-macos-meta": "macOS · Apple Silicon / Intel",
    "port-macos-desc": "Compilaciones nativas de OptiCraft Heritage para macOS en Apple Silicon (ARM64) e Intel (x64).",
    aboutCopy: `
      <p>Esta plataforma fue creada como un repositorio central para recopilar y dar visibilidad a todos los <strong>ports no oficiales de OptiCraft Heritage Edition</strong> en distintas consolas y plataformas, facilitando su acceso a la comunidad frente a las limitaciones de plataformas como YouTube.</p>
      <p class="about-warning">⚠️ <strong>Aviso:</strong> La mayoría de los proyectos se encuentran en etapas tempranas de desarrollo (WIP), por lo que aún pueden presentar inestabilidad o errores.</p>
      <p>¿Tienes un port o quieres colaborar? ¡Únete a nuestro <a class="discord-link" href="https://discord.gg/5ndWfJzb7e" target="_blank" rel="noreferrer">Discord oficial</a> para agregar tu proyecto!</p>
    `,
    "modal-title": "MANTENGAMOS VIVOS LOS PORTS",
    "modal-lead": "Un recordatorio amistoso de la comunidad.",
    "modal-msg-links": "Si disfrutas un port, recuérdale a su desarrollador que mantenga los enlaces de descarga al día con la última versión, para que todos encuentren las compilaciones más recientes.",
    "modal-msg-source": "También te recomendamos pedir siempre el código fuente: compartirlo mantiene los ports vivos y fáciles de mantener.",
    "modal-subtext": "Buenos enlaces y código compartido mantienen este sitio útil. ¡Gracias por el apoyo!",
    "modal-btn-never": "NO VOLVER A MOSTRAR",
    "modal-btn-ok": "ENTENDIDO"
  }
};

function setLanguage(lang) {
  const t = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  localStorage.setItem('heritage_lang', lang);

  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const metaDesc = document.getElementById('meta-desc');
  if (metaDesc) metaDesc.content = t.metaDesc;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      if (key === 'controls' || key === 'footer-disclaimer') {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  const aboutContainer = document.getElementById('about-copy-container');
  if (aboutContainer) {
    aboutContainer.innerHTML = t.aboutCopy;
  }
}

// Initial language: check stored preference or default to English ('en')
const savedLang = localStorage.getItem('heritage_lang') || 'en';
setLanguage(savedLang);

langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// --- Panel Navigation & Home Screen Toggle ---
function showPanel(id) {
  document.body.classList.add('panel-open');
  titleScreen?.classList.add('hidden');
  legacyMenu?.classList.add('hidden');
  panels.forEach(p => p.classList.toggle('visible', p.id === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHome() {
  document.body.classList.remove('panel-open');
  panels.forEach(p => p.classList.remove('visible'));
  titleScreen?.classList.remove('hidden');
  legacyMenu?.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


menuButtons.forEach(b => {
  b.addEventListener('click', () => showPanel(b.dataset.open));
});

backHomeButtons.forEach(b => {
  b.addEventListener('click', showHome);
});

// --- Port Item Selection ---
portButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.port;
    portButtons.forEach(x => x.classList.toggle('active', x === button));
    portViews.forEach(x => x.classList.toggle('active', x.id === 'view-' + id));
  });
});

// --- Keyboard Controls (Arrow Up/Down, Enter, ESC) ---
window.addEventListener('keydown', e => {
  const portsPanel = document.getElementById('ports');
  const isPortsOpen = portsPanel && portsPanel.classList.contains('visible');
  const isAboutOpen = document.getElementById('about')?.classList.contains('visible');

  if (e.key === 'Escape') {
    if (isPortsOpen || isAboutOpen) {
      showHome();
    }
  } else if (isPortsOpen) {
    const activeIndex = Array.from(portButtons).findIndex(b => b.classList.contains('active'));
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (activeIndex + 1) % portButtons.length;
      portButtons[nextIndex]?.click();
      portButtons[nextIndex]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (activeIndex - 1 + portButtons.length) % portButtons.length;
      portButtons[prevIndex]?.click();
      portButtons[prevIndex]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      const activeView = document.querySelector('.port-view.active');
      const actionLink = activeView?.querySelector('a.legacy-button');
      if (actionLink) {
        actionLink.click();
      }
    }
  }
});

// --- Community Notice Modal ---
function initCommunityNoticeModal() {
  const modal = document.getElementById('discontinued-modal');
  if (!modal) return;

  const STORAGE_KEY = 'och_community_notice_dismissed';
  const SESSION_KEY = 'och_community_notice_session_dismissed';

  const isPermanentlyDismissed = localStorage.getItem(STORAGE_KEY) === 'true';
  const isSessionDismissed = sessionStorage.getItem(SESSION_KEY) === 'true';

  if (isPermanentlyDismissed || isSessionDismissed) {
    return;
  }

  function openModal() {
    modal.removeAttribute('hidden');
    void modal.offsetWidth; // trigger reflow for smooth transition
    modal.classList.add('visible');
    document.body.classList.add('modal-open');
  }

  function closeModal(persistPermanently) {
    modal.classList.remove('visible');
    document.body.classList.remove('modal-open');
    setTimeout(() => {
      modal.setAttribute('hidden', '');
    }, 220);

    sessionStorage.setItem(SESSION_KEY, 'true');
    if (persistPermanently) {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
  }

  setTimeout(openModal, 150);

  const btnNeverShow = document.getElementById('btn-modal-never-show');
  const btnClose = document.getElementById('btn-modal-close');

  btnNeverShow?.addEventListener('click', () => {
    closeModal(true);
  });

  btnClose?.addEventListener('click', () => {
    closeModal(false);
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal(false);
    }
  });

  window.addEventListener('keydown', e => {
    if (modal.classList.contains('visible') && (e.key === 'Escape' || e.key === 'Enter')) {
      e.preventDefault();
      e.stopPropagation();
      closeModal(false);
    }
  }, true);
}

initCommunityNoticeModal();
