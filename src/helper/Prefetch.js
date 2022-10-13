import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { store } from '../services/store'
import { coursesApiSlice } from '../services/Courses/coursesApiSlice'
import { usersApiSlice } from '../services/Users/usersApiSlice';

const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing')
        const courses = store.dispatch(coursesApiSlice.endpoints.getCourses.initiate())
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

        return () => {
            console.log('unsubscribing')
            courses.unsubscribe()
            users.unsubscribe()
        }
    }, [])

    return <Outlet />
}
export default Prefetch