import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:lavozdeguanacaste/src/models/post_model.dart';

import '../pages/post_html_page.dart';

class CardPost01 extends StatelessWidget {
  final Posts post;
  const CardPost01({Key? key, required this.post}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const TextStyle styleMetadata = TextStyle(
        color: Colors.black54, fontSize: 12, fontWeight: FontWeight.w300);

    return InkWell(
      onTap: () {
        Navigator.push(context, MaterialPageRoute(builder: (context) {
          return PostHtmlPage(post: post);
        }));
      },
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ImagePost(post: post),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  post.title,
                  style: const TextStyle(
                      fontSize: 20, fontWeight: FontWeight.bold),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 8.0),
                  child: Row(
                    children: [
                      Text(
                        formateDate(post.date),
                        style: styleMetadata,
                      ),
                      const SizedBox(
                        width: 5,
                      ),
                      const Text(" | ", style: styleMetadata),
                      const SizedBox(
                        width: 5,
                      ),
                      Text(
                        post.author,
                        style: styleMetadata,
                      ),
                      const SizedBox(
                        width: 5,
                      ),
                      const Text(
                        " | ",
                        style: styleMetadata,
                      ),
                      const SizedBox(
                        width: 5,
                      ),
                      Text(
                        post.readtime,
                        style: styleMetadata,
                      )
                    ],
                  ),
                ),
                Text(
                  removeHtmlTags(post.excerpt),
                  style: const TextStyle(
                      fontSize: 14, fontWeight: FontWeight.w300),
                ),
              ],
            ),
          ),
          Container(
            margin: const EdgeInsets.only(bottom: 5.0),
            height: 1,
            color: Colors.black12,
          )
        ],
      ),
    );
  }
}

String removeHtmlTags(String htmlText) {
  RegExp exp = RegExp(r"<[^>]*>", multiLine: true, caseSensitive: true);
  return htmlText.replaceAll(exp, '');
}

String formateDate(String date) {
  var dateParse = DateTime.parse(date);
  var formatedDate = "${dateParse.day}/${dateParse.month}/${dateParse.year}";
  return formatedDate;
}

class ImagePost extends StatelessWidget {
  const ImagePost({
    Key? key,
    required this.post,
  }) : super(key: key);

  final Posts post;

  @override
  Widget build(BuildContext context) {
    return CachedNetworkImage(
      imageUrl: post.image,
      placeholder: (context, url) => Center(
          child: Container(
              height: 150,
              width: 150,
              padding: const EdgeInsets.all(40.0),
              child: const CircularProgressIndicator())),
      errorWidget: (context, url, error) => const Icon(Icons.error),
    );
  }
}
