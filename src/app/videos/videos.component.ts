import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.less']
})
export class VideosComponent implements OnInit {
  videos:any[] = [
    {
      title: 'The Modern Artist',
      description: 'News story assignment I filmed about a young aspiring hip hop artist in Pittsburgh.',
      src: 'https://www.youtube.com/embed/GrAo5ECnP_c'
    },
    {
      title: 'Christmas Town',
      description: 'Freeform Project filmed for my Grandfather, about a model Christmas Town he sets up every year.',
      src: 'https://www.youtube.com/embed/EeJcgTUzDp0'
    },
    {
      title: 'Bachelor Movie',
      description: 'Faker trailer to a movie that will probably never exist, but hey, we still had fun making it.  Enjoy watching a boy become a man.',
      src: 'https://www.youtube.com/embed/DWB34N8N6Bw'
    },
    {
      title: 'Stop Hurting Sea Creatures',
      description: 'PSA project filmed for school about sea creatures and the dangers of plastic entanglement and ocean pollution.',
      src: 'https://www.youtube.com/embed/8lGRGg2y1zg'
    },
    {
      title: 'Brahctopus: A Brahcumentary',
      description: 'Short documentary I did on a local Pittsburgh band called Brahctopus.  A fun reggae jam band that loves music and the city of Pittsburgh.',
      src: 'https://www.youtube.com/embed/GG_DepBwmtU'
    },
    /*
    {
      title: '',
      description: '',
      src: ''
    },
    */
  ]
  constructor() { }

  ngOnInit() {
  }

}
