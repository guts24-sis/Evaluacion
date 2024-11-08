document.addEventListener('DOMContentLoaded', () => {
  const albums = [
    { title: "Outlandos d'amour", artist: 'The Police', releaseDate: '1978-11-17', imageUrl: 'assets/AlbumImages/album_outlandosdamour-compressed.jpg', genre: 'rock' },
    { title: 'Alive', artist: 'Kiss', releaseDate: '1975-09-1975', imageUrl: 'assets/AlbumImages/Alive.jpeg', genre: 'rock' },
    { title: 'Out of the Blue', artist: 'Electric Light Orchestra', releaseDate: '1977-10-03', imageUrl: 'assets/AlbumImages/elo.jpeg', genre: 'rock' },
    { title: 'Rumours', artist: 'Fleetwood Mac', releaseDate: '1977-02-04', imageUrl: 'assets/AlbumImages/mqdefault.jpg', genre: 'pop' },
    { title: 'Dark Side of the Moon', artist: 'Pink Floyd', releaseDate: '1973-03-01', imageUrl: 'assets/AlbumImages/darkss.png', genre: 'rock' },
    { title: 'Abbey Road', artist: 'The Beatles', releaseDate: '1969-09-26', imageUrl: 'assets/AlbumImages/abbey.jpg', genre: 'rock' },
    { title: 'Thriller', artist: 'Michael Jackson', releaseDate: '1982-11-30', imageUrl: 'assets/AlbumImages/Thriller.png', genre: 'pop' },
    { title: 'Hotel California', artist: 'Eagles', releaseDate: '1976-12-08', imageUrl: 'assets/AlbumImages/eagless.jpg', genre: 'rock' },
    { title: 'Back in Black', artist: 'AC/DC', releaseDate: '1980-07-25', imageUrl: 'assets/AlbumImages/blackk.jpeg', genre: 'rock' },
    {title: 'True blue', artist: 'Madonna', releaseDate: '1986-06-30', imageUrl: 'assets/AlbumImages/maddona.jpg', genre: 'pop'}
  ];

  const albumList = document.getElementById('album-list');
  const rockList = document.getElementById('rock-list');
  const popList = document.getElementById('pop-list');
  const allList = document.getElementById('all-list');

  albums.forEach(album => {
    const albumCard = document.createElement('div');
    albumCard.className = 'col-md-4';
    albumCard.innerHTML = `
      <div class="card h-100">
        <img src="${album.imageUrl}" class="card-img-top" alt="${album.title}">
        <div class="card-body">
          <h5 class="card-title">${album.title}</h5>
          <p class="card-text">Artista: ${album.artist}</p>
          <p class="card-text">Fecha de Lanzamiento: ${album.releaseDate}</p>
        </div>
      </div>
    `;

    if (album.genre === 'rock') {
      rockList.appendChild(albumCard);
    } else if (album.genre === 'pop') {
      popList.appendChild(albumCard);
    }
    allList.appendChild(albumCard.cloneNode(true));
  });
});

