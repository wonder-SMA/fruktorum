export default defineEventHandler(async () => {
  try {
    const data = await $fetch<TResponse>(process.env.API_URL);

    return {
      title: data.meta.title,
      description: data.meta.description,
      body: data.body,
    };
  } catch (e) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong',
    });
  }
});
