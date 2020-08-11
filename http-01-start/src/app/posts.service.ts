import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs';


export class PostsService {
    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        this.http
            .post<{ name: string }>(
                'https://ng-complete-guide-e8109.firebaseio.com/posts.json',
                postData,
                {
                    observe: 'response'
                }
            )
            .subscribe(
                responseData => {
                    console.log(responseData);
                },
                error => {
                    this.error.next(error.message);
                });
    }

    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        return this.http
            .get<{ [key: string]: Post }>(
                'https://ng-complete-guide-e8109.firebaseio.com/posts.json',
                {
                    headers: new HttpHeaders({ "Custom-Header": "hello" }),
                    params: searchParams
                }
            )
            .pipe(
                map(responseData => {
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key))
                            postsArray.push({ ...responseData[key], id: key });
                    }
                    return postsArray;
                }),
                catchError(errorRes => {
                    // Send to analytics server, for example
                    // Log it somewhere
                    // And the pass it on
                    return throwError(errorRes); // yields a new Observable, so parent still subscribes
                }));
    }

    deletePosts() {
        return this.http
            .delete(
                'https://ng-complete-guide-e8109.firebaseio.com/posts.json',
                {
                    observe: 'events'
                }
            ).pipe(
                tap(event => {
                    console.log(event);
                    if (event.type === HttpEventType.Sent) {
                        // ...
                    }
                    if (event.type === HttpEventType.Response) {
                        console.log(event.body);
                    }
                }));
    }

}