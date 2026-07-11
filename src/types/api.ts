export type DjangoHealthResponse = {
  status: string;
  service: string;
};

export type DjangoFetchResult = {
  ok: boolean;
  data: DjangoHealthResponse | null;
  error?: string;
};
