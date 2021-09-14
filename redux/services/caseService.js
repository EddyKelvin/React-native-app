

export const createCaseService = async (data) => {
  try {
    console.log('res');

    const res = await axios.post(`${CASE_URL}/create`, data);
    return res;
  } catch (err) {
    return err;
  }
};
