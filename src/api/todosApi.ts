import axios from 'axios';

const getTodos = async () => {
  try {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );

    return data;
  } catch (e) {
    return {error: e.response.data.message};
  }
};

export {getTodos};
