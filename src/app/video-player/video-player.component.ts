import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../video';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VideoService } from '../video.service';

declare const forward: any;
declare const backward: any;
declare const togglePlay: any;
declare const toggleMute: any;
declare const toggleFullscreen: any;
var video = document.querySelector('.video');

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})

export class VideoPlayerComponent implements OnInit {

  @Input() video: Video;

  constructor(private route: ActivatedRoute,
    private videoService: VideoService,
    private location: Location) 
  { }

  forwardButtonClick(): void {
    forward();
  }
  backwardButtonClick(): void {
    backward();
  }
  playButtonClick(): void {
    togglePlay();
  }
  muteButtonClick(): void {
    toggleMute();
  }
  fullscreenButtonClick(): void {
    toggleFullscreen();
  }

  ngOnInit(): void {
    this.getVideo();
  }

  getVideo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.videoService.getVideo(id).subscribe(video => this.video = video);
  }

}
