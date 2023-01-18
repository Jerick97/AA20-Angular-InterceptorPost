import { TestBed } from '@angular/core/testing';

import { InterceptorPostInterceptor } from './interceptor-post.interceptor';

describe('InterceptorPostInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorPostInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorPostInterceptor = TestBed.inject(InterceptorPostInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
