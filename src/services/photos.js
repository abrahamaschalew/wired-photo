export default class Photo {
  constructor(url) {
    this.image = {
      url,
      isFavourite: false,
      isInList: false,
      listName: null,
    };
  }
  // add to favourites
  static addToFavourites(url, photos) {
    photos.map((element, index) => {
      if (element.url == url) {
        photos[index].isFavourite = true;
      }
    });

    return photos;
  }

  // Remove from favourites
  static removeFavourite(url, photos) {
    photos.map((element, index) => {
      if (element.url == url) {
        photos[index].isFavourite = false;
      }
    });
    return photos;
  }

  // add the selected photo to list
  static addToList(url, listName, photos) {
    photos.map((element, index) => {
      if (element.url == url) {
        photos[index].isInList = true;
        photos[index].listName = listName;
      }
    });
    return photos;
  }

  // add the selected photo to list
  static removeFromList(url, photos) {
    photos.map((element, index) => {
      if (element.url == url) {
        photos[index].isInList = false;
        photos[index].listName = null;
      }
    });
    return photos;
  }
}
