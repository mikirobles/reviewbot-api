interface HTTPService {
  post<B = any, R = any>(url: string, body: B): Promise<R>;
}

export default HTTPService;
