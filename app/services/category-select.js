import Ember from 'ember';

export default Ember.Service.extend({
  isPerformances: false,
  isProducts: false,
  isArtworks: false,
  isPress: false,
  isAlbums: false,
  isSongs: false,
  isVideos: false,

  selectCategory(category){
    if (category==="performances"){
      this.set('isPerformances', true);
      this.set('isProducts', false);
      this.set('isArtworks', false);
      this.set('isPress', false);
      this.set('isAlbums', false);
      this.set('isSongs', false);
      this.set('isVideos', false);
    }
    if (category === 'products'){
      this.set('isPerformances', false);
      this.set('isProducts', true);
      this.set('isArtworks', false);
      this.set('isPress', false);
      this.set('isAlbums', false);
      this.set('isSongs', false);
      this.set('isVideos', false);
    }
    if (category === 'artworks'){
      this.set('isPerformances', false);
      this.set('isProducts', false);
      this.set('isArtworks', true);
      this.set('isPress', false);
      this.set('isAlbums', false);
      this.set('isSongs', false);
      this.set('isVideos', false);
    }
    if (category === 'press'){
      this.set('isPerformances', false);
      this.set('isProducts', false);
      this.set('isArtworks', false);
      this.set('isPress', true);
      this.set('isAlbums', false);
      this.set('isSongs', false);
      this.set('isVideos', false);
    }
    if (category === 'albums'){
      this.set('isPerformances', false);
      this.set('isProducts', false);
      this.set('isArtworks', false);
      this.set('isPress', false);
      this.set('isAlbums', true);
      this.set('isSongs', false);
      this.set('isVideos', false);
    }
    if (category === 'songs'){
      this.set('isPerformances', false);
      this.set('isProducts', false);
      this.set('isArtworks', false);
      this.set('isPress', false);
      this.set('isAlbums', false);
      this.set('isSongs', true);
      this.set('isVideos', false);
    }
    if (category === 'videos'){
      this.set('isPerformances', false);
      this.set('isProducts', false);
      this.set('isArtworks', false);
      this.set('isPress', false);
      this.set('isAlbums', false);
      this.set('isSongs', false);
      this.set('isVideos', true);
    }
  }


});
