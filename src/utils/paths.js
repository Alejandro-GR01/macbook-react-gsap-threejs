const baseUrl = import.meta.env.BASE_URL || '/';

const asset = (path) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath.slice(1)}`;
};

export const models = {
  macbook14: asset('/models/macbook-14-transformed.glb'),
  macbook16: asset('/models/macbook-16-transformed.glb'),
  macbook: asset('/models/macbook-transformed.glb'),
};

export const textures = {
  screen: asset('/screen.png'),
};

export const images = {
  title: asset('/title.png'),
  titleAvif: asset('/title.avif'),
  maskLogo: asset('/mask-logo.svg'),
  logo: asset('/logo.svg'),
  performance1: asset('/performance1.png'),
  performance2: asset('/performance2.png'),
  performance3: asset('/performance3.png'),
  performance4: asset('/performance4.png'),
  performance5: asset('/performance5.jpg'),
  performance6: asset('/performance6.png'),
  performance7: asset('/performance7.png'),
  featureIcon1: asset('/feature-icon1.svg'),
  featureIcon2: asset('/feature-icon2.svg'),
  featureIcon3: asset('/feature-icon3.svg'),
  featureIcon4: asset('/feature-icon4.svg'),
  featureIcon5: asset('/feature-icon5.svg'),
  ai: asset('/ai.png'),
  battery: asset('/battery.png'),
  laptop: asset('/laptop.png'),
  highlightBg: asset('/highlight-bg.png'),
  sun: asset('/sun.png'),
  screen: asset('/screen.png'),
};

export const icons = {
  search: asset('/search.svg'),
  cart: asset('/cart.svg'),
};

export const videos = {
  hero: asset('/videos/hero.mp4'),
  game: asset('/videos/game.mp4'),
  feature1: asset('/videos/feature-1.mp4'),
  feature2: asset('/videos/feature-2.mp4'),
  feature3: asset('/videos/feature-3.mp4'),
  feature4: asset('/videos/feature-4.mp4'),
  feature5: asset('/videos/feature-5.mp4'),
};

export const fonts = {
  regular: asset('/fonts/regular.otf'),
  medium: asset('/fonts/medium.otf'),
  light: asset('/fonts/light.otf'),
  bold: asset('/fonts/bold.otf'),
  semibold: asset('/fonts/semibold.otf'),
  thin: asset('/fonts/thin.otf'),
  ultralight: asset('/fonts/ultralight.otf'),
  heavy: asset('/fonts/heavy.otf'),
  black: asset('/fonts/black.otf'),
};

export default { models, textures, images, videos, fonts, asset };
