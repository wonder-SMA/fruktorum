declare global {
  type TIntroBlock = {
    title: string;
    image: string;
    reading_time: number;
    views_count: number;
    short_description: string;
  };

  type TTextBlock = string;

  type TImageBlock = {
    src: string;
    caption: string;
  };

  type TArticleListBlock = {
    title: string;
    articles: Array<{
      title: string;
      link: string;
      image: string;
    }>;
  };

  type TSliderBlock = string[];

  type TBlock = {
    type:
      | 'article_intro_block'
      | 'text_block'
      | 'image_block'
      | 'slider_block'
      | 'subscribe_form_block'
      | 'article_list_block'
      | 'cta_form_block';
    id: string;
    data: TIntroBlock | TTextBlock | TImageBlock | TSliderBlock | TArticleListBlock | '';
  };

  type TResponse = {
    page_type: 'home' | 'article';
    meta: {
      title: string;
      description: string;
      slug: string;
    };
    body: TArticleListBlock[] | TBlock[];
  };

  type THomeData = {
    title: string;
    description: string;
    body: TArticleListBlock[];
  };

  type TArticleData = {
    title: string;
    description: string;
    body: TBlock[];
  };

  type TError = {
    url: string;
    statusCode: number;
    statusMessage: string;
    message: string;
    description: string;
    data: any;
  };
}
