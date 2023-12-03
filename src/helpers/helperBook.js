import { useState, useEffect } from 'react';

 export const useHttp = (url) => {
 const [isLoading, setIsLoading] = useState(false);
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);

 useEffect(() => {
 setIsLoading(true);
 setError(null)
 fetch(url)
 .then(response => {
 if (!response.ok) {
 setError('Failed to fetch.');
 throw new Error('Failed to fetch.');
 }
 return response.json();
 })
 .then(data => {
 setIsLoading(false);
 setError(null);
 setData(data);
 })
 .catch(err => {
 setError(err);
 setIsLoading(false);
 });
 }, [url]);

 return { isLoading, error, data };
 };