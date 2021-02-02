import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Video } from './video';
import { VIDEOS } from './mock-videos';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }
  
  getVideo(id: number): Observable<Video> {
    return of(VIDEOS.find(video => video.id === id));
  }

  getVideos(): Observable<Video[]> {
    return of(VIDEOS);
  }
}
