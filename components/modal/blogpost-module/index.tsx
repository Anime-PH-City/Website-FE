import Image from "next/image";
import React from "react";
import Overlay from "../overlay";
import blogpost from "public/assets/imgs/blogpost.png";

const BlogPost = ({
  isOpen,
  onClose,
  header,
}: {
  isOpen: boolean;
  onClose: () => void;
  header: string;
}) => {
  return (
    <div>
      <Overlay isOpen={isOpen} onClose={onClose} header={header}>
        <div>
          <Image src={blogpost} alt="blog-heading" />
          <h1 className="font-bold text-3xl my-2 w-[100%] [word-spacing:3%]">
            The Hype that October brings to the Otaku Community
          </h1>
          <p className="[word-spacing:5%] tracking-wide my-4 [line-height:1.8rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            tincidunt congue orci at vel mi mi. Pharetra, egestas cursus et
            nunc. Ut suscipit non id nunc aliquet velit senectus. Curabitur
            pharetra egestas non rhoncus. Turpis facilisis amet, ornare ipsum
            pharetra aliquet dui. Tempor sed adipiscing vestibulum euismod
            vestibulum. Amet at amet, in quisque mollis vitae posuere morbi
            tristique. Aliquam nibh urna in vitae. Semper non aliquet mauris,
            urna. Arcu leo amet molestie lacus a adipiscing cursus mauris ac.
            Vivamus proin purus viverra massa pharetra. Pellentesque porta sed
            augue iaculis. Aliquam hendrerit in et, faucibus egestas mauris.
            Viverra in.
          </p>
        </div>
      </Overlay>
    </div>
  );
};

export default BlogPost;
