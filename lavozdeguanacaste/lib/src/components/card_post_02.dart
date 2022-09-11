import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

import '../models/post_model.dart';
import '../pages/post_html_page.dart';

class CardPost02 extends StatelessWidget {
  final Posts post;
  const CardPost02({Key? key, required this.post}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.push(context, MaterialPageRoute(builder: (context) {
          return PostHtmlPage(post: post);
        }));
      },
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.all(10.0),
            child: Row(
              children: [
                Expanded(
                  flex: 1,
                  child: SizedBox(height: 130, child: ImagePost(post: post)),
                ),
                Expanded(
                  flex: 2,
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          post.title,
                          style: const TextStyle(
                              fontSize: 18, fontWeight: FontWeight.bold),
                        ),
                        Padding(
                          padding: const EdgeInsets.symmetric(vertical: 8.0),
                          child: Row(
                            children: [
                              Text(
                                formateDate(post.date),
                                style: const TextStyle(
                                    color: Colors.black54,
                                    fontSize: 12,
                                    fontWeight: FontWeight.w300),
                              ),
                              const SizedBox(
                                width: 5,
                              ),
                              const Text(
                                " | ",
                                style: TextStyle(
                                    color: Colors.black54,
                                    fontSize: 12,
                                    fontWeight: FontWeight.w300),
                              ),
                              const SizedBox(
                                width: 5,
                              ),
                              Text(
                                post.readtime,
                                style: const TextStyle(
                                    color: Colors.black54,
                                    fontSize: 12,
                                    fontWeight: FontWeight.w300),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          const Divider(
            height: 1,
            thickness: 1,
          )
        ],
      ),
    );
  }
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
      fit: BoxFit.cover,
      placeholder: (context, url) => Container(
          padding: const EdgeInsets.all(30.0),
          width: 50,
          height: 50,
          child: const CircularProgressIndicator()),
      errorWidget: (context, url, error) => const Icon(Icons.error),
    );
  }
}
