import { reactive } from "vue";
import { useRouter } from "vue-router";

export function showModal(): {
    let element = this.$refs.modal.$el
    $(element).modal('show')
}