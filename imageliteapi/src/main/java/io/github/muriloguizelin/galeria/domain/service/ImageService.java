package io.github.muriloguizelin.galeria.domain.service;

import java.util.List;
import java.util.Optional;

import io.github.muriloguizelin.galeria.domain.entity.Image;
import io.github.muriloguizelin.galeria.domain.enums.ImageExtension;

public interface ImageService {
    Image save(Image image);

    Optional<Image> getById(String id);

    List<Image> search(ImageExtension extension, String query);

    Optional<Image> delete(String id);
}
