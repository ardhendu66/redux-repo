import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4000"}),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Products'],
            transformResponse: res => res.sort((a, b) => b.id - a.id)
        }),
        addProducts: builder.mutation({
            query(newProduct) {
                return {
                    url: '/products',
                    method: 'POST',
                    body: newProduct
                }
            },
            invalidatesTags: ['Products']
        }),
        updateProducts: builder.mutation({
            query({id}) {
                return {
                    url: `/products/${id}`,
                    method: 'PUT',
                    body: {
                        id: "5bcef67a43d",
                        title: "iPhone 15",
                        price: 77000,
                        link: "https://apple.ihone.com/iphone=15"
                    }
                }
            },
            invalidatesTags: ['Products']
        }),
        deleteProducts: builder.mutation({
            query({id}) {
                return {
                    url: `/products/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Products']
        })
    })
})

export const { 
    useGetProductsQuery,
    useAddProductsMutation, 
    useUpdateProductsMutation,
    useDeleteProductsMutation
} = apiSlice