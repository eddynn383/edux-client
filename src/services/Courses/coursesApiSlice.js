import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice"

const coursesAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = coursesAdapter.getInitialState()

export const coursesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCourses: builder.query({
            query: () => '/api/v1/courses', 
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: (responseData) => {
                const loadedCourses = responseData.map(course => {
                    course.id = course._id
                    return course
                });
                return coursesAdapter.setAll(initialState, loadedCourses)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Course', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Course', id }))
                    ]
                } else return [{ type: 'Course', id: 'LIST' }]
            }
        }),
        addNewCourse: builder.mutation({
            query: (initialCourse) => ({
                url: '/api/v1/courses',
                method: 'POST',
                body: {
                    ...initialCourse,
                }
            }),
            invalidatesTags: [
                { type: 'Course', id: "LIST" }
            ]
        }),
        updateCourse: builder.mutation({
            query: (initialCourse) => ({
                url: '/api/v1/courses',
                method: 'PATCH',
                body: {
                    ...initialCourse,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Course', id: arg.id }
            ]
        }),
        deleteCourse: builder.mutation({
            query: ({ id }) => ({
                url: `api/v1/courses`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Course', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetCoursesQuery,
    useAddNewCourseMutation,
    useUpdateCourseMutation,
    useDeleteCourseMutation,
} = coursesApiSlice

// returns the query result object
export const selectCoursesResult = coursesApiSlice.endpoints.getCourses.select()

// creates memoized selector
const selectCoursesData = createSelector(selectCoursesResult, (coursesResult) => coursesResult.data) // normalized state object with ids & entities

// getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllCourses,
    selectById: selectCourseById,
    selectIds: selectCourseIds
    // Pass in a selector that returns the courses slice of state
} = coursesAdapter.getSelectors(state => selectCoursesData(state) ?? initialState)