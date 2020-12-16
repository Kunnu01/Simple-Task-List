import axios from 'axios';

const userId = 4
const baseUrl = `https://tiny-list.herokuapp.com/api/v1/users/${userId}`

const callApi = async (method, url, data) => {
  try {
    return await axios({
      method,
      url: `${baseUrl}${url}`,
      data,
    });
  } catch (err) {
    // show SnackBar to display error
  }
}

export { callApi }
