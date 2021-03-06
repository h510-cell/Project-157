AFRAME.registerComponent("comic", {
    init: function () {
      this.comicContainer = this.el;   
      this.createComics();
    },
  
    createComics: function () {
      const thumbNailsRef = [
        {
          id: "Avengers The Ultimate Character Guide",
          title: "Avengers The Ultimate Character Guide",
          url: "./images/thumbnails/Avenger Character.jpg",
        },
        {
          id: "Avengers Alliance",
          title: "Avengers Alliance",
          url: "./images/thumbnails/Avenger Alliance.jpg",
        },
  
        {
          id: "DC Super Hero Stamp Album",
          title: "DC Super Hero Stamp Album",
          url: "./images/thumbnails/DC Stamp Album.jpg",
        },
        {
          id: "Superboy and the legion  of Super Hero",
          title: "Superboy and the legion  of Super Hero",
          url: "./images/thumbnails/DC Super Heroes.jpg",
        },
      ];
      
      let prevoiusXPosition = -50;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const BorderEl = this.createBorder(position, item.id);
  
        // Thumbnail Element
        const ThumbNail = this.createThumbNail(item);
        BorderEl.appendChild(ThumbNail);
  
        // Title Text Element
        const TitleEl = this.createTitleEl(position, item);
        BorderEl.appendChild(TitleEl);
  
        this.comicContainer.appendChild(BorderEl);
      }
    },
    createBorder: function (position, id) {
      const EntityEl = document.createElement("a-entity");
      EntityEl.setAttribute("id", id);
      EntityEl.setAttribute("visible", true);
      EntityEl.setAttribute("geometry", {
        primitive: "rectangle",
        radiusInner: 9,
        radiusOuter: 10,
      });
      EntityEl.setAttribute("position", position);
      EntityEl.setAttribute("material", {
        color: "#0077CC",
        opacity: 1,
      });
  
      return EntityEl;
    },
    createThumbNail: function (item) {
      const EntityEl = document.createElement("a-entity");
      EntityEl.setAttribute("visible", true);
      EntityEl.setAttribute("geometry", {
        primitive: "rectangle",
        radius: 9,
      });
      EntityEl.setAttribute("material", { src: item.url });
  
      return EntityEl;
    },
    createTitleEl: function (position, item) {
      const EntityEl = document.createElement("a-entity");
      EntityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      EntityEl.setAttribute("position", elPosition);
      EntityEl.setAttribute("visible", true);
      return EntityEl;
    },
  });