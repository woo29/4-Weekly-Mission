import React, { useContext } from "react"
import ShareHeaderInfo from "./ShareHeaderInfo"
import Loading from "components/UI/Loading"
import ErrorCard from "components/UI/ErrorCard"
import { ShareContext } from "context/ShareContext"

import * as S from "./ShareHeader.style"

function ShareHeader() {
  const { isLoading, data, hasError } = useContext(ShareContext)

  const renderLoading = isLoading && <Loading />
  const renderSuccess = data && <ShareHeaderInfo data={data} />
  const renderFailed = hasError && <ErrorCard>{hasError.message}</ErrorCard>

  return (
    <S.ShareHeader>
      <S.Wrapper>
        {renderLoading}
        {renderSuccess}
        {renderFailed}
      </S.Wrapper>
    </S.ShareHeader>
  )
}

export default ShareHeader
