import {h, defineComponent } from "vue";

export default defineComponent({
    name: 'Add',
    setup() {
        return () => <div>
            <h2>i will generate an error</h2>
            <p>ReferenceError: React is not defined</p>
          </div>
    }
})
