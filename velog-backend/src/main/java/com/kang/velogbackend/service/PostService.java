package com.kang.velogbackend.service;

import com.kang.velogbackend.domain.post.Post;
import com.kang.velogbackend.domain.post.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PostService {

    private final PostRepository postRepository;
    
    @Transactional//서비스 함수가 종료될 때 commit할지 rollback할지 트랜잭션 관리하겠다.
    public Post 저장하기(Post Post) {
        return postRepository.save(Post);
    }

    @Transactional(readOnly = true) //JPA 변경감지라는 내부 기능 활성화 X, update시의 정합성을 유지해줌. inset의 유령데이터현상(팬텀현상) 못막음
    public Post 한건가져오기(Long id) {
        return postRepository.findById(id) //함수형으로 변환
                .orElseThrow(()->new IllegalArgumentException("id를 확인해주세요!"));
    }

    @Transactional(readOnly = true)
    public List<Post> 모두가져오기() {
        return postRepository.findAll();
    }

//    @Transactional
//    public Post 수정하기(Long id, Post Post) {
//        //더티체킹 update치기
//        Post postEntity = postRepository.findById(id)
//                .orElseThrow(()->new IllegalArgumentException("id를 확인해주세요!!"));// 영속화 (Post 오브젝트) -영속성 컨텍스트 보관
//
//        postEntity.setTitle(Post.getTitle());
//        postEntity.setAuthor(Post.getAuthor());
//
//        return PostEntity;
//    }//함수 종료=>트랜잭션 종료 => 영속화 되어있는 데이터를 DB로 갱신(flush) => commit ===========>더티체킹

    @Transactional
    public String 삭제하기(Long id) {
        postRepository.deleteById(id);//오류가 터지면 익셉션을 타니까...신경쓰지 말고

        return "ok";
    }


}
