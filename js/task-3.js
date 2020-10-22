const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('#gallery');

const addImgElements = images.map(imgInfo => {
  //   const listRef = document.createElement('li');
  //   const imgRef = document.createElement('img');
  //   Object.entries(imgInfo).forEach(([key, value]) => {
  //     imgRef.setAttribute(`${key}`, `${value}`);
  //   });
  //   galleryList.append(listRef);
  //   listRef.append(imgRef);

  galleryList.insertAdjacentHTML(
    'beforeend',
    `<li><img ${Object.entries(imgInfo)
      .map(([key, value]) => key + '=' + '"' + value + '"')
      .join(' ')} /></li>`,
  );
});
