import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetail } from "../redux/actions"

function Detalle({ userDetail, getDetail }) {
    const id = useParams()

    useEffect(() => {
        getDetail(id)
    }, [id, getDetail])

    console.log(userDetail)
    return (
        <div>
            {userDetail ? (
                <pre>{JSON.stringify(userDetail, null, 4)}</pre>
            ) : (
                <h1>No hay detalle</h1>
            )}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userDetail: state.userDetail
    }
}

export default connect(mapStateToProps, { getDetail })(Detalle)
