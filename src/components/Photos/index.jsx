import React, { useState } from 'react';
import { useGetPhotosQuery } from '../../apis/dashboardApi';
import Loading from '../Loading';
import Paginator from '../Paginator';

const PER_PAGE_RESULTS = 10;

export default function Photos() {
  const { data: photos, isError, isLoading } = useGetPhotosQuery();
  const [page, setPage] = useState(0);

  if (isError) {
    return <p>Error while fetching Users</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  const pagedPhotos = photos.slice(
    page * PER_PAGE_RESULTS,
    (page + 1) * PER_PAGE_RESULTS
  );

  return (
    <div className="photos__container">
      {pagedPhotos.map((photo, index) => (
        <div key={index}>
          <img
            src={photo.thumbnailUrl}
            className="img-thumbnail img-responsive"
            alt="Rounded"
            loading="lazy"
          />
          <p>{photo.title}</p>
        </div>
      ))}
      <Paginator
        perPage={PER_PAGE_RESULTS}
        photos={photos}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
