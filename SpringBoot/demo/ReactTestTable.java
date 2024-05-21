package com.example.demo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "characterdata")
public class ReactTestTable implements ReactTestInterface {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int chara_id;
	@Column
	public int chara_hp;
	@Column
	public String chara_name;
	@Column 
	public int chara_at;
	@Override
	public int GetChara_id() {
		// TODO 自動生成されたメソッド・スタブ
		return chara_id;
	}
	@Override
	public void SetChara_id(int chara_id) {
		// TODO 自動生成されたメソッド・スタブ
		this.chara_id = chara_id;
	}
	@Override
	public int GetChara_hp() {
		// TODO 自動生成されたメソッド・スタブ
		return chara_hp;
	}
	@Override
	public void SetChara_hp(int chara_hp) {
		// TODO 自動生成されたメソッド・スタブ
		this.chara_hp = chara_hp; 
	}
	@Override
	public String GetChara_name() {
		// TODO 自動生成されたメソッド・スタブ
		return chara_name;
	}
	@Override
	public void SetChara_name(String chara_name) {
		// TODO 自動生成されたメソッド・スタブ
		this.chara_name = chara_name;
	}
	@Override
	public int GetChara_at() {
		// TODO 自動生成されたメソッド・スタブ
		return chara_at;
	}
	@Override
	public void SetChara_at(int chara_at) {
		// TODO 自動生成されたメソッド・スタブ
		this.chara_at = chara_at;
	}
}
