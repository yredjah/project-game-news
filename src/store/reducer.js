
// == Initial State
const initialState = {
  articles: {
    newsOfTheWeek: [
      {
        id: '8',
        image: 'https://a.allegroimg.com/s512/031565/5e9f46d24abc988b39eb94d0af3f/Mortal-Kombat-11-Steam-PC-KLUCZ',
        title: 'Mortal Kombat 11: release date has been leaked',
        resume: 'Kombat 11 et les leaks, c\'est une longue histoire d\'amour. Après le roster du jeu qui a été divulgué en avance, c\'est au tour de Nightwolf, le kombattant amérindien de MK11.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
      {
        id: '9',
        image: 'https://hb.imgix.net/4d85628c9dbe4f21bfd3299b3a10b1aa62a21894.jpg?auto=compress,format&fit=crop&h=353&w=616&s=6c61117f1a1b1d56da6c5118618bc2f6',
        title: 'Final Fantasy XIV : "l\'Éveil d\'Eden" arrive aujourd\'hui',
        resume: 'Tout juste deux semaines après la sortie de Final Fantasy XIV : Shadowbringers, Square Enix déploie la première série de raids de cette troisième extension, "l\'Éveil d\'Eden".',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
      {
        id: '10',
        image: 'http://image.jeuxvideo.com/medias-md/156382/1563818741-4350-card.jpg',
        title: 'Wolfenstein  toujours aussi nerveux - E3 2019',
        resume: 'Attendu pour le moi prochain, Wolfenstein Youngblood a dévoilé un nouveau trailer, afin de rappeler l\'ambition qui sera la sienne à partir du 16 juillet.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
      {
        id: '12',
        videoId: 'R381qGPN2Ik',
        image: 'src/Assets/img/netflix.jpg',
        title: 'The Witcher: la série Netflix tant attendue se dévoile dans une bande-annonce.',
        resume: 'The Witcher',
        text: 'Portée par Henry Cavill dans le rôle de Geralt de Riv, l\'adaptation de la série littéraire éponyme sera diffusée fin 2019 sur la plateforme de streaming. Comme tous les ans, le Comic-Con de San Diego apporte son lot de trailers de films et séries attendus de pied ferme. Parmi les plus grosses annonces de la 50e édition de cette grand-messe de la pop culture, qui s\'est tenue du 18 au 22 juillet, on trouve la bande-annonce de The Witcher, qui figure parmi les séries les plus attendues de cette fin d\'année. Créée par le géant du streaming Netflix, ce feuilleton est adapté de l\'intrigue de la série littéraire à succès Le Sorcelleur, de l\'auteur polonais Andrzej Sapkowski. Il ne se basera donc pas sur celle des célèbres jeux vidéos développés par le studio CD Projekt depuis 2007, bien que des éléments communs aux deux supports devraient être présents dans la série.. The Witcher se déroule dans un univers fantastico-médiéval dans lequel vivent humains, elfes, sorciers, et autres monstres et créatures en tous genres. L\'acteur britannique Henry Cavill (Man of Steel, Mission Impossible: Fallout) y incarne le héros Geralt de Riv, un chasseur de monstres, ou "sorcelleur", doté de pouvoirs magiques.',
      },
    ],
    news: [
      {
        id: '1',
        videoId: 'TcZyiYOzsSw',
        image: 'src/Assets/img/wow.jpg',
        title: 'World Of Warcraft : Classic',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
      {
        id: '2',
        videoId: '0GLbwkfhYZk',
        image: 'src/Assets/img/jedi.jpg',
        title: 'Star Wars : Jedi Fallen Order',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
      {
        id: '3',
        videoId: 'qIcTM8WXFjk',
        image: 'src/Assets/img/cyber.jpg',
        title: 'Cyberpunk 2077',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
      {
        id: '4',
        videoId: 'qPNiIeKMHyg',
        image: 'src/Assets/img/last.jpg',
        title: 'The Last of Us Part II',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
      {
        id: '5',
        videoId: 'Zi8k4KGyW6o',
        image: 'src/Assets/img/watchdog.jpg',
        title: 'Watch Dogs 3 : Legion',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
      {
        id: '6',
        videoId: 'ENjwexZnLPI',
        image: 'src/Assets/img/death.jpg',
        title: 'Death Stranding',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
      {
        id: '7',
        image: 'https://static.fnac-static.com/multimedia/Images/FD/Comete/111882/CCP_IMG_ORIGINAL/1447719.jpg',
        title: 'Kingdom Hearts 3 est le jeu le plus vendu de la licence',
        resume: 'Selon NPD, Kingdom Hearts III est devenu le jeu le plus vendu de la licence tous épisodes confondus en l\'espace de quelques mois seulement',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
    ],
  },
  categories: [
    {
      id: '1',
      name: 'Loading',
    },
  ],
  genres: [
    { id: 1, name: 'Loading' },
  ],
  activeItem: 'home',

  registerLastName: '',
  registerFirstName: '',
  registerUserName: '',
  registerEmail: '',
  registerPassword: '',
  loginEmail: '',
  loginPassword: '',

  creatTitle: '',
  creatText: '',
  creatGameName: '',
  creatVideo: '',
  creatImage: '',
  creatPlatform: '',
  creatGenre: '',

  contactFirstName: '',
  contactLastName: '',
  contactEmail: '',
  contactMessage: '',

  email: '',
  messagesList: [],

  newMessage: '',

  userInfo: {
    firstName: '',
    lastName: '',
    userName: '',
    mail: '',
  },
};

// == Types
export const GET_COMMENTARY = 'GET_COMMENTARY';
export const SET_COMMENTARY = 'SET_COMMENTARY';
export const ON_SUBMIT_COMMENTARY = 'ON_SUBMIT_COMMENTARY';
export const ON_SUBMIT_ARTICLE = 'ON_SUBMIT_ARTICLE';
export const ON_SUBMIT_LOGIN = 'ON_SUBMIT_LOGIN';
export const ON_SUBMIT_REGISTER = 'ON_SUBMIT_REGISTER';
export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_ARTICLES = 'GET_ARTICLES';
export const ON_SUBMIT_CONTACT = 'ON_SUBMIT_CONTACT';
export const GET_PLATEFORM = 'GET_PLATEFORM';
export const GET_GENRE = 'GET_GENRE';
const SET_ARTICLES = 'SET_ARTICLES';
const CLEAN_REGISTER_FIELDS = ' CLEAN_REGISTER_FILEDS';
const SET_USERS_LOGIN = 'SET_USERS_LOGIN';
const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';
const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
const ADD_MESSAGE = 'ADD_MESSAGE';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_PLATEFORM = 'SET_PLATEFORM';
const SET_GENRE = 'SET_GENRE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.name,
      };
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_USERS_LOGIN:
      return {
        ...state,
        token: action.token,
      };
    case CLEAN_REGISTER_FIELDS:
      return {
        ...state,
        registerLastName: '',
        registerFirstName: '',
        registerUserName: '',
        registerEmail: '',
        registerPassword: '',
        newMessage: '',
      };
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.articles,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: {
          firstName: action.firstName,
          lastName: action.lastName,
          userName: action.userName,
          mail: action.mail,
          role: action.role,
        },
      };
    case SET_PLATEFORM:
      return {
        ...state,
        categories: action.plateforms,
      };
    case SET_GENRE:
      return {
        ...state,
        genres: action.genres,
      };
    case SET_COMMENTARY:
    {
      const { messagesList: oldMessages } = state;
      const newMsg = {
        id: action.id,
        label: action.commentary,
        username: action.userName,
        time: '12/09/2019  15h34',
      };
      const messagesListCopy = [
        ...oldMessages,
        newMsg,
      ];
      return {
        ...state,
        messagesList: messagesListCopy,
        newMessage: '',
      };
    }
    default:
      return state;
  }
};

// == Action Creators
export const setActiveItem = name => ({
  type: SET_ACTIVE_ITEM,
  name,
});

export const onInputChange = (name, value) => ({
  type: ON_INPUT_CHANGE,
  name,
  value,
});
export const addMessageAction = () => ({
  type: ADD_MESSAGE,
});

export const onsubmitLogin = () => ({
  type: ON_SUBMIT_LOGIN,
});

export const setUsersLogin = token => ({
  type: SET_USERS_LOGIN,
  token,
});
export const onsubmitRegister = () => ({
  type: ON_SUBMIT_REGISTER,
});

export const cleanRegisterFileds = () => ({
  type: CLEAN_REGISTER_FIELDS,
});

export const onSubmitContact = () => ({
  type: ON_SUBMIT_CONTACT,
});

export const getArticle = () => ({
  type: GET_ARTICLES,
});

export const setArticles = articles => ({
  type: SET_ARTICLES,
  articles,
});

export const getUserInfo = () => ({
  type: GET_USER_INFO,
});

export const setUserInfo = (userName, firstName, lastName, mail, role) => ({
  type: SET_USER_INFO,
  userName,
  firstName,
  lastName,
  mail,
  role,
});
export const getPlateform = () => ({
  type: GET_PLATEFORM,
});
export const setPlateform = plateforms => ({
  type: SET_PLATEFORM,
  plateforms,
});
export const getGenres = () => ({
  type: GET_GENRE,
});
export const setGenre = genres => ({
  type: SET_GENRE,
  genres,
});

export const onsubmitArticle = () => ({
  type: ON_SUBMIT_ARTICLE,
});

export const onsubmitCommentary = () => ({
  type: ON_SUBMIT_COMMENTARY,
});

export const getCommentary = () => ({
  Type: GET_COMMENTARY,
});

export const setCommentary = (commentary, userName, id) => ({
  type: SET_COMMENTARY,
  commentary,
  userName,
  id,
});

// == Export
export default reducer;
