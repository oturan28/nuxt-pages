interface User {
    id: number
    name: string
    email: string
}
export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>({name: 'Vorname Nachname', email: 'test@anwalt.de', id: 0})
    return { user }
})