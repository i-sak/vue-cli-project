export const dateFormat = {
    data : ()  =>({
        mixinData : 'mixin data'
    }),
    created () {
        console.log("mixin")
    },
    methods : {
        getDateAndTime(date) {
            if( date != null) {
                let hour = date.getHours()
                let minutes = date.getMinutes()
                let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
                return `${fullDate} ${hour}:${minutes}`
            } else {
                return null
            }
        }
    }
}