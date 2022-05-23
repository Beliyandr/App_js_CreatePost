const dataBase = "https://wfm-js-e4606-default-rtdb.firebaseio.com/";

class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async createPost(post) {
    try {
      const request = new Request(this.url + "/posts.json", {
        method: "post",
        body: JSON.stringify(post),
      });

      return useRequest(request);
    } catch (error) {
      console.error(error);
    }
  }

  async fetchPosts() {
    try {
      const request = new Request(`${this.url}/posts.json`, {
        method: "get",
      });
      return useRequest(request);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchPostById(id) {
    try {
      let request = new Request(this.url + `/posts/${id}.json`, {
        method: "get",
      });
      request = request.url.replace(/%20/g, "");
      return useRequest(request);
    } catch (error) {
      console.log(error);
    }
  }
}

async function useRequest(request) {
  const response = await fetch(request);
  return await response.json();
}

export const apiService = new ApiService(
  "https://wfm-js-e4606-default-rtdb.firebaseio.com"
);
