import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import { restoreItem } from "services/storage";

export const api = axios.create({
  baseURL: 'https://api.booclub.damaso.com.br',
  headers: {
    Authorization: `bearer ${restoreItem('@bookclub_token')}`
  }
})

export const queryClient = new QueryClient()